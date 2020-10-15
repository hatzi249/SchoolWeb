const main = async () => {
    try {
            const api = await import('./api');
            const data = await api.getData();
            console.log(data);

            const html = await import ('./html');
            html.displayTeachers(data.teachers);
            html.displayClasses(data.classes);
            html.displayCarts(data.cartCount);
    }
    catch (e) {
        console.log(e);
    }
}
main();

/* const yoo = async () => {
    try {
            const api = await import('./api');
            const data = await api.getDota();
            console.log(data);

            const html = await import ('./html');
            
    }
    catch (e) {
        console.log(e);
    }
}
yoo();
 */
/* const yolo = async () => {
    try {
            const api = await import('./api');
            const data = await api.getDeta();
            console.log(data);

            const html = await import ('./html');
            html.displayCarts(data.carts);
    }
    catch (e) {
        console.log(e);
    }
}
yolo(); */