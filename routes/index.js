const router = require('express').Router();
const get_data = require("../controllers/get_data");
const add_user = require("../controllers/add_user");
const add_coach = require("../controllers/add_coach");
const login_user = require("../controllers/login_user");
const login_coach = require("../controllers/login_coach");
const add_class = require("../controllers/add_class");
const get_my_classes = require("../controllers/get_my_classes");
const get_classes = require("../controllers/get_classes");
const join_class = require("../controllers/join_class");
const joined_classes = require("../controllers/get_joined_classes");
const activate_account = require("../controllers/activate_account");
const inactive_accounts = require("../controllers/get_inactive_accounts");

// router.get('/',get_data);
router.post('/signup',add_user);
router.post('/signup_coach',add_coach);
router.post('/login',login_user);
router.post('/login_coach',login_coach);
router.post('/add_class',add_class);
router.post('/get_my_classes',get_my_classes);
router.post('/get_classes',get_classes);
router.post('/join_class',join_class);
router.post('/get_joined_classes',joined_classes);
router.post('/activate_account',activate_account);
router.get('/get_inactive_accounts',inactive_accounts);



module.exports = router;