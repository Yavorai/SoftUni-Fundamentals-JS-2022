function solve(input) {
    function objectCreation(input) {
        let comments = {
            articles: [],

            users: [],
        };

        let pattern = /article \w+|user \w+/g;

        while (input[0] !== undefined) {
            let cur = input.shift();

            if (cur.match(pattern) !== null) {
                cur = cur.split(" ");

                if (cur[0] === "article") {
                    comments.articles.push(cur[1]);
                } else if (cur[0] === "user") {
                    comments.users.push(cur[1]);
                }
            } else {
                cur = cur.split(/\sposts\son\s|:\s/g);

                // console.log(cur);

                if (
                    comments.articles.includes(cur[1]) &&
                    comments.users.includes(cur[0])
                ) {
                    if (comments.hasOwnProperty(cur[1])) {
                        comments[cur[1]][cur[0]] = cur[2];
                    } else {
                        comments[cur[1]] = {
                            [cur[0]]: cur[2],
                        };
                    }
                }
            }
        }

        delete comments.articles;

        delete comments.users;

        return comments;
    }

    function arrayCreation() {
        let comments = objectCreation(input);

        let arr = [];

        for (let art in comments) {
            let arr2 = [];

            for (let key in comments[art]) {
                arr2.push([key, comments[art][key]]);
            }

            arr.push([art, arr2]);
        }

        return arr;
    }

    function sorting() {
        let arr = arrayCreation();

        arr.sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length);

        for (let el of arr) {
            el[1].sort((a, b) => a[0].localeCompare(b[0]));
        }

        return arr;
    }

    function printing() {
        let arr = sorting();

        for (let el of arr) {
            console.log(`Comments on ${el[0]}`);

            for (let el2 of el[1]) {
                let el3 = el2[1].split(", ");

                console.log(`--- From user ${el2[0]}: ${el3[0]} - ${el3[1]}`);
            }
        }
    }

    printing();
}
solve(
'user aUser123',
'someUser posts on someArticle: NoTitle, stupidComment',
'article Books',
'article Movies',
'article Shopping',
'user someUser',
'user uSeR4',
'user lastUser',
'uSeR4 posts on Books: I like books, I do really like them',
'uSeR4 posts on Movies: I also like movies, I really do',
'someUser posts on Shopping: title, I go shopping every day',
'someUser posts on Movies: Like, I also like movies very much'
])