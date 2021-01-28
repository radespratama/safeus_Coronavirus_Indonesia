const formatNumber = (number = 0) => {
    const formatNumbering = new Intl.NumberFormat("id-ID");
    return formatNumbering.format(number)
}

export default formatNumber