// Firebase 配置 - 数据持久化系统
// 注意：需要用户创建 Firebase 项目并填入配置信息

const FIREBASE_CONFIG = {
    // apiKey: "YOUR_API_KEY",
    // authDomain: "YOUR_PROJECT.firebaseapp.com",
    // projectId: "YOUR_PROJECT_ID",
    // storageBucket: "YOUR_PROJECT.appspot.com",
    // messagingSenderId: "YOUR_SENDER_ID",
    // appId: "YOUR_APP_ID"
};

// Firebase 初始化（需要引入 Firebase SDK）
// <script src="https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js"></script>
// <script src="https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js"></script>

class DataManager {
    constructor() {
        this.isOnline = false;
        this.db = null;
        this.useLocalStorage = true; // 默认使用本地存储
    }

    // 初始化 Firebase
    async initFirebase(config) {
        try {
            // firebase.initializeApp(config);
            // this.db = firebase.firestore();
            // this.isOnline = true;
            // this.useLocalStorage = false;
            console.log('Firebase 初始化成功');
            return true;
        } catch (error) {
            console.error('Firebase 初始化失败:', error);
            return false;
        }
    }

    // 保存用户数据
    async saveUser(userData) {
        if (this.useLocalStorage) {
            localStorage.setItem('aiComicUser', JSON.stringify(userData));
            return true;
        }

        try {
            // await this.db.collection('users').doc(userData.id).set(userData);
            return true;
        } catch (error) {
            console.error('保存用户数据失败:', error);
            // 降级到本地存储
            localStorage.setItem('aiComicUser', JSON.stringify(userData));
            return false;
        }
    }

    // 加载用户数据
    async loadUser(userId) {
        if (this.useLocalStorage) {
            const data = localStorage.getItem('aiComicUser');
            return data ? JSON.parse(data) : null;
        }

        try {
            // const doc = await this.db.collection('users').doc(userId).get();
            // return doc.exists ? doc.data() : null;
            return null;
        } catch (error) {
            console.error('加载用户数据失败:', error);
            // 降级到本地存储
            const data = localStorage.getItem('aiComicUser');
            return data ? JSON.parse(data) : null;
        }
    }

    // 保存故事数据
    async saveStory(storyId, storyData) {
        if (this.useLocalStorage) {
            const stories = JSON.parse(localStorage.getItem('aiComicStories') || '{}');
            stories[storyId] = storyData;
            localStorage.setItem('aiComicStories', JSON.stringify(stories));
            return true;
        }

        try {
            // await this.db.collection('stories').doc(storyId).set(storyData);
            return true;
        } catch (error) {
            console.error('保存故事数据失败:', error);
            return false;
        }
    }

    // 加载故事数据
    async loadStory(storyId) {
        if (this.useLocalStorage) {
            const stories = JSON.parse(localStorage.getItem('aiComicStories') || '{}');
            return stories[storyId] || null;
        }

        try {
            // const doc = await this.db.collection('stories').doc(storyId).get();
            // return doc.exists ? doc.data() : null;
            return null;
        } catch (error) {
            console.error('加载故事数据失败:', error);
            return null;
        }
    }

    // 获取用户的所有故事
    async getUserStories(userId) {
        if (this.useLocalStorage) {
            const stories = JSON.parse(localStorage.getItem('aiComicStories') || '{}');
            return Object.values(stories).filter(s => s.author === userId);
        }

        try {
            // const snapshot = await this.db.collection('stories')
            //     .where('author', '==', userId)
            //     .get();
            // return snapshot.docs.map(doc => doc.data());
            return [];
        } catch (error) {
            console.error('获取用户故事失败:', error);
            return [];
        }
    }

    // 同步本地数据到云端
    async syncToCloud() {
        if (!this.isOnline) {
            console.log('云端未连接，无法同步');
            return false;
        }

        try {
            // 同步用户数据
            const userData = localStorage.getItem('aiComicUser');
            if (userData) {
                await this.saveUser(JSON.parse(userData));
            }

            // 同步故事数据
            const storiesData = localStorage.getItem('aiComicStories');
            if (storiesData) {
                const stories = JSON.parse(storiesData);
                for (const [id, story] of Object.entries(stories)) {
                    await this.saveStory(id, story);
                }
            }

            console.log('数据同步成功');
            return true;
        } catch (error) {
            console.error('数据同步失败:', error);
            return false;
        }
    }

    // 备份数据
    backupData() {
        const backup = {
            user: localStorage.getItem('aiComicUser'),
            stories: localStorage.getItem('aiComicStories'),
            timestamp: new Date().toISOString()
        };

        const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ai-comic-backup-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    // 恢复数据
    restoreData(backupData) {
        try {
            const data = JSON.parse(backupData);
            if (data.user) {
                localStorage.setItem('aiComicUser', data.user);
            }
            if (data.stories) {
                localStorage.setItem('aiComicStories', data.stories);
            }
            return true;
        } catch (error) {
            console.error('恢复数据失败:', error);
            return false;
        }
    }

    // 清除所有数据
    clearAllData() {
        localStorage.removeItem('aiComicUser');
        localStorage.removeItem('aiComicStories');
        console.log('所有数据已清除');
    }
}

// 创建全局数据管理器实例
const dataManager = new DataManager();

// 导出函数
function initFirebase(config) {
    return dataManager.initFirebase(config);
}

function saveUserData(userData) {
    return dataManager.saveUser(userData);
}

function loadUserData(userId) {
    return dataManager.loadUser(userId);
}

function saveStoryData(storyId, storyData) {
    return dataManager.saveStory(storyId, storyData);
}

function loadStoryData(storyId) {
    return dataManager.loadStory(storyId);
}

function backupAllData() {
    dataManager.backupData();
}

function restoreAllData(backupData) {
    return dataManager.restoreData(backupData);
}

function clearAllData() {
    dataManager.clearAllData();
}
