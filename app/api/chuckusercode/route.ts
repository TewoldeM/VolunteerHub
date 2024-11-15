import { useSession } from 'next-auth/react';

const session = useSession();
const user = session.data && session.data.user;