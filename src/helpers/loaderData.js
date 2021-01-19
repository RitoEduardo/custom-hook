export const loaderData = ( items ) => {

    for( let i = 0; i < items; i++ ){
        console.log('Ahí vamos')
    }

    return ` ${ items } iterations ready`;
}
