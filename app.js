import axios from "axios";

async function getUser(id) {
    return new Promise(async (resolve, reject) => {
        const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + id);
        resolve(user);
    })
}
async function getPosts(id) {
    return new Promise(async (resolve, reject) => {
        const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + id);
        resolve(posts);
    })
}

async function getData(id) {
    try {
        const user = await getUser(id);
        const posts = await getPosts(id);

        console.log("User\n", user);
        console.log("Posts\n", posts);
    }
    catch (e) {
        console.log(e);
    }

}

export default getData;
