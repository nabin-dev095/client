import { AuthContext } from "@/contexts/auth.context";
import { Role } from "@/types/global.types";
import { useRouter } from "next/navigation";
import { ComponentType, useContext, useEffect } from "react";
import toast from "react-hot-toast";

const withAuth = <P extends object>(
  Component: ComponentType<P>,
  roles?: Role[],
) => {
  return function ProtectedComponent(props: P) {
    const { isLoading, user } = useContext(AuthContext);
    const router = useRouter();
    //logic
    useEffect(() => {
      if (isLoading) {
        return;
      }

      if (!isLoading && !user) {
        toast.error("Login required");
        router.replace("/login");
        return;
      }

      if (user && roles && !roles.includes(user.role)) {
        toast.error("you can not access this resource");
        router.replace("/");
        return;
      }
    }, [isLoading, user, router]);

    if (isLoading) {
      return null;
    }

    if (!isLoading && !user) {
      return null;
    }

    if (user && roles && !roles.includes(user.role)) {
      return null;
    }

    return <Component {...props} />;
  };
};

export default withAuth;
