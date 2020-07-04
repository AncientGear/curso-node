
const verificarAdmin = (req, res, next) => {
    const rol = req.usuario.role;

    if(rol === 'ADMIN_ROLE') {
        next();
    }

    return res.status(401).send({
        status: false,
        message: 'Rol inválido'
    })
}

module.exports = {
    verificarAdmin
}