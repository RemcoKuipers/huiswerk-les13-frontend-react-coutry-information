function formatToMillions(population) {
    if (!population) return 0;
    return Math.round(population / 1000000);
}


export default formatToMillions