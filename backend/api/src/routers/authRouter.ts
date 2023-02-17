import { Router } from "express";

const router = Router();

/* rotas para os autenticação */
/* rota para o user se registar */
router.post('/auth/register', function(){
    console.log('/auth/register')
})
/* rota para o user fazer login */
router.post('/auth/login', function(){
    console.log('auth/login')
})
/* rota para o user fazer reset da password */
router.post('auth/resetPassword:id', function(){
    console.log('resetPassword:id')
})
/* rota para o user criar nova password */
router.post('/auth/newPassword:id', function(){
    console.log('/auth/newPassword:id')
})

export default router;