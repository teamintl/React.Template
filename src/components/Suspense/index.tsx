  
import React, { Suspense } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


interface Props {
  fallback?: React.ElementType;
  children: React.ReactNode;
}

function CustomSuspense({ fallback: Fallback = CircularProgress, children }: Props) {
  return <Suspense fallback={<Fallback />}>{children}</Suspense>;
}

export default CustomSuspense;
