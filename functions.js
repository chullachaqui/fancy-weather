export const rounder = (coordinate) => {
    return (Math.round(coordinate * 1000))/1000;
}

export const timeSwitch = (coordinate) => {
    const minutes = coordinate % 1 * 60;
    const seconds = minutes % 1 * 60;
    return `${Math.round(coordinate)}\xB0 ${Math.abs(Math.floor(minutes))}" ${Math.abs(Math.floor(seconds))}'`;
}