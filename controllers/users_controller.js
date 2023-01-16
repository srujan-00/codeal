module.exports.profile = function (req, res) {
    return res.render('user_profile');
}
module.exports.posts = function (req, res) {
    return res.end('<h1>user has these posts!</h1>')

}