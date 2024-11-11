const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/appdownload", (req, res) => {
    const userAgent = req.headers['user-agent'].toLowerCase();

    if (/android/i.test(userAgent)) {
        res.redirect("https://play.google.com/store/apps/details?id=com.fenchtose.reflog");
    } else if (/ipad|iphone/i.test(userAgent)) {
        res.redirect("https://apps.apple.com/us/app/todo-list-calendar-taskito/id6471266496");
    } else {
        res.redirect("https://taskito.io");
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
