import React from 'react';
import { Spinner, LockBody, ReleaseBody, Picture } from './styles/loading';

export default function Loading({ src, ...restprops }) {
    return (
        <Spinner {...restprops}>
            <LockBody />
            <Picture src={`/images/users/${src}.png`} />

        </Spinner>
    )
}

Loading.ReleaseBody = function LoadingReleaseBody() {
    return <ReleaseBody />
}