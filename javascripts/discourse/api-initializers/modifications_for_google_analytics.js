import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.11.1", api => {
  const router = api.container.lookup("service:router");
  const currentUser = router.currentUser;
  const userIdObject = window.dataLayer?.find(item => item.userId);
  if (userIdObject) {
    userIdObject["userId"] = currentUser?.external_id;
  }
});
