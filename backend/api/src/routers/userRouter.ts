import { Router } from "express";

const router = Router();

/* rotas para os users */
/* rota para user registar */
router.post('/users/register', function(){
    console.log('post users')
})
/* rota para user fazer login */
router.post('/users/login', function(){
    console.log('get all users')
})
/* rota para obter users */
router.get('/users/', function(){
    console.log('get user')
})

/* rota para obter um user  */
router.get('/users/:id', function(){
    console.log('delete user')
})

export default router;