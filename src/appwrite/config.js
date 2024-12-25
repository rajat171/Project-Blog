import conf from "../conf/conf.js";
import { Client, Databases, ID, Storage, Query } from "appwrite";

//learn about creating files and posts
export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    // slug will be userId
    //createDocument returns a promise resolved which is an object
    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
            }
        )            
        } catch (error) {
            console.log("AppWrite error :: createPost :: error",error)
        }
    }

    //here featured image is nothing but a fileId 
    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite error :: updatePost :: error",error)
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            );
            return true;
        } catch (error) {
            console.log("Appwrite error :: deletePost :: error",error)
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("AppWrite error :: getPost :: error",error)
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite :: getPosts :: error",error)
        }
    }

    //file upload
    // this file returns an id which 
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("Appwrite error :: uploadFile :: error",error)
        }
    }

    //delete file

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId,
            )
            return true;
        } catch (error) {
            console.log("Appwrite error :: deleteFile :: error",error)
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        )
    }
}

const service = new Service();

export default service;