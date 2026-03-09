import PageLayout from '@/components/PageLayout';
import { Preferences } from '@capacitor/preferences';
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { useLayoutEffect } from 'react';

export const Route = createFileRoute('/logout')({
  component: RouteComponent,
})

function RouteComponent() {
    const router = useRouter();
  
    const checkSession = async () => {
       await Preferences.remove({ key: 'user'});
       router.navigate({ to: '/'});
    }
  
    useLayoutEffect(() => {
      checkSession();
    }, [])
  return (
    <PageLayout>
       <div>Kobby</div>
    </PageLayout>
    )
}
