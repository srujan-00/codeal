module.exports.profile = function (req, res) {
    return res.end('<h1>user has this profile!</h1>');
}
module.exports.posts = function (req, res) {
    return res.end('<h1>user has these posts!</h1>')

}