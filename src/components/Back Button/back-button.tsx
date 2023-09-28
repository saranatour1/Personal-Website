import { component$ } from '@builder.io/qwik';
import { useValidateRoute } from '~/Custom hooks/useValidateRoute';
import { PageLink } from '../Page Link/page-link';

export const BackButton = component$(() => {
  const valid =  useValidateRoute();
  
  
  return <>
      {valid.validRoute.value && <PageLink title='back' route='/' />}
  </>

    
});
