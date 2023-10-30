import jwt from 'jsonwebtoken';


const loginApi = (req, res) => {
    const { username, password } = req.body;
    const token = jwt.sign({ user:username }, process.env.JSON_SECRET, {expiresIn:"10m"});
    res.json({token});
};


const login = (req, res) => {
    const { username, password } = req.body;
    //... comprobar que usuario existe y contraseña correcta
    req.session.user = username;
    res.redirect("/");
};

const logout = (req, res) => {
    req.session.destroy();
    res.redirect("/login");
}

const loginForm = (req, res) => {
    res.render("auth/login");
}


export default {
    login,
    loginForm,
    logout,
}