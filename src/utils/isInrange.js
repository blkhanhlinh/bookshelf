const isInrange = (price, range) => {
    switch(range) {
        case '0-150000':
            return price >= 0 && price <= 150000;
        case '150000-300000':
            return price >= 150000 && price <= 300000;
        case '300000-500000':
            return price >= 300000 && price <= 500000;
        case '500000-700000':
            return price >= 500000 && price <= 700000;
        case '700000-above':
            return price >= 700000;
    }
}

export default isInrange;