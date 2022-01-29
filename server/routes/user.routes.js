import express from "express";
import userCtrl from "../controllers/user.controller.js"
import authCtrl from '../controllers/auth.controller.js'

const router = express.Router();

// router.route("/api/users").get(userCtrl.list).post(userCtrl.create)

router.param("userId", userCtrl.userByID);

//API для получения фотографии из базы данных

router.route('/api/users/photo/:userId')
  .get(userCtrl.photo, userCtrl.defaultPhoto)
router.route('/api/users/defaultphoto')
  .get(userCtrl.defaultPhoto)

// API для получения пользователей просматривающих страницу

router.route('/api/users/follow')
    .put(authCtrl.requireSignin, userCtrl.addFollowing, userCtrl.addFollower)
router.route('/api/users/unfollow')
    .put(authCtrl.requireSignin, userCtrl.removeFollowing, userCtrl.removeFollower)

// API для поиска и просмотра человека

router.route('/api/users/findpeople/:userId')
   .get(authCtrl.requireSignin, userCtrl.findPeople)

// Основные API - получение списка пользователей, создание пользователя, просмотр своего профиля и его редактирование и удаление
router.route("/api/users/:userId").get(authCtrl.requireSignin, userCtrl.read)
router.route("/api/users/:userId").put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
router.route("/api/users/:userId").delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove);
router.route("/api/users").get(userCtrl.list)
router.route('/api/users').post(userCtrl.create)

export default router;
