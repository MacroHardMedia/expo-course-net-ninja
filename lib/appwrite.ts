import { Client, Account, Databases, Storage } from "react-native-appwrite";

// Initialize Appwrite client
const client = new Client()
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT ?? "")
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID ?? "");

// Create service instances
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

// Export client for advanced use cases
export { client };

// Auth Service Functions
export const authService = {
  // Create new user account
  createAccount: async (email: string, password: string, name?: string) => {
    try {
      const userAccount = await account.create(
        "unique()",
        email,
        password,
        name
      );
      return userAccount;
    } catch (error) {
      throw error;
    }
  },

  // Login user
  login: async (email: string, password: string) => {
    try {
      const session = await account.createEmailPasswordSession(email, password);
      return session;
    } catch (error) {
      throw error;
    }
  },

  // Get current user
  getCurrentUser: async () => {
    try {
      const user = await account.get();
      return user;
    } catch (error) {
      throw error;
    }
  },

  // Logout user
  logout: async () => {
    try {
      await account.deleteSession("current");
    } catch (error) {
      throw error;
    }
  },

  // Logout from all devices
  logoutAll: async () => {
    try {
      await account.deleteSessions();
    } catch (error) {
      throw error;
    }
  },
};

// Database Service Functions (for future use)
export const databaseService = {
  // Add your database operations here
};

// Storage Service Functions (for future use)
export const storageService = {
  // Add your storage operations here
};
