import { router } from "@/config/express.config";
import { facebookCallback, googleCallback, registerUser, registerWithFacebook, registerWithGoogle } from "@/controller/auth";
import { registerSchema } from "@/lib/validation/auth";
import csrfProtection from "@/middlewares/csrfTokenHandler";
import { validateRequest } from "@/middlewares/validation";

router.post(
  "/register",
  csrfProtection,
  validateRequest(registerSchema),
  registerUser
);
// * GOOGLE
router.get("/google", registerWithGoogle)
router.all("/google/callback", googleCallback);
// * FACEBOOK
router.get("/facebook", registerWithFacebook);
router.get("/facebook/callback", facebookCallback);

export default router;
