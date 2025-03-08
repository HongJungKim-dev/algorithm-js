function solution(sizes) {
    const widths = [];
    const heights = [];
    for (let i = 0; i < sizes.length; i++) {
        const [width, height] = sizes[i];
        if (width >= height) {
            widths.push(width)
            heights.push(height);
        } else {
            widths.push(height)
            heights.push(width);
        }
        
    }
    return Math.max(...widths) * Math.max(...heights)
}