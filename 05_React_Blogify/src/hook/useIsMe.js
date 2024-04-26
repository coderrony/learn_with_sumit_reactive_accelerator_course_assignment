import useAuth from "./useAuth";

const useIsMe = (id) => {
  const { auth } = useAuth();

  const isMe = auth?.user?.id === id;

  return { isMe };
};

export default useIsMe;
