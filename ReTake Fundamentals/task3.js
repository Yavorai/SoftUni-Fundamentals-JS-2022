function func(arr) {
    const splitted = arr
        .map((item) => JSON.parse(item))
        .reduce((prev, curr) => ({...prev, ...curr }), {});
    const sorted = Object.keys(splitted)
        .sort()
        .reduce(
            (prev, curr) => ({
                ...prev,
                [curr]: splitted[curr],
            }), {}
        );
    for (let i in sorted) {
        console.log(`Term: ${i} => Definition: ${sorted[i]}`);
    }
}