import fetch from "node-fetch";

class Avatar {
    image = "";
    get getAvatar() {
        return this.image;
    }
    set setAvatar(value) {
        // Use Promise
        this.image = new Promise((resolve, reject) => {
            fetch(value)
                .then(res => resolve(res.arrayBuffer()))
                .catch(err => reject(err));
        });
    }
}

const emhat = new Avatar();

(async() => {
  await (emhat.setAvatar = "https://picsum.photos/1080");
  emhat.getAvatar.then(res => console.log(res));
})();
