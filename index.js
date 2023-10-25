class Github {
    constructor() {
        this.form = document.getElementById("form");
        this.input = document.getElementById("search");
        // this.card = document.getElementById("card");

        this.form.addEventListener("submit", async (event) => {
            event.preventDefault();
            const username = this.input.value.trim();

            if (username) {
                await this.getUserDetails(username);
            }
        });

        // this.getUserDetails("Tom The Cat");
    }

    async getUserDetails(username) {
        try {
            const resp = await fetch(`https://api.github.com/users/${username}`);

            if (!resp.ok) {
                throw new Error("Request Failed");
            }

            const data = await resp.json();
            this.createUser(data);
        } catch (err) {
            console.log("Error:", err);
            // this.card.innerHTML = "<p>User details not Available</p>";
        }
    }

    createUser(user) {
        document.getElementById("avatar").src = `${user.avatar_url}`;
        document.getElementById("avatar").alt = `${user.login}`;
        document.getElementById("name").innerText = `${user.name || user.login}`;
        document.getElementById("bio").innerText = `${user.bio || "Not Available"}`;
        document.getElementById("follower").innerText = `${user.followers || "Not Available"
            }`;
        document.getElementById("following").innerText = `${user.following || "Not Available"
            }`;
        document.getElementById("repos").innerText = `${user.public_repos || "Not Available"
            }`;
        document.getElementById("twitter").innerText = `${user.twitter_username || "Not Available"
            }`;
        document.getElementById("location").innerText = `${user.location || "Not Available"
            }`;
    }
}

new Github();
