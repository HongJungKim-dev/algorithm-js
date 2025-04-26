function solution(genres, plays) {
    const maxAlbumCount = 2;
    const genresLength = genres.length;
    const playsLength = plays.length;
    const cases = [];
    const categoryTime = {};
    // 장르별 총 재생회수 구하기
    for(let i = 0; i < genresLength; i++) {
        const genre = genres[i];
        const play = plays[i];
        if(categoryTime[genre] === undefined) {
            categoryTime[genre] = play;
        } else {
            categoryTime[genre] += play;
        }
    }

    for(let i = 0; i < genresLength; i++) {
        const genre = genres[i];
        const play = plays[i];
        if(cases[i] === undefined) {
            cases.push({
                index: i,
                genre,
                play,
                total: categoryTime[genre],
            })
        }
    }

    cases.sort((a, b) => {
        if(a.total < b.total) {
            return 1;
        } else if(a.total > b.total) {
            return -1;
        } else {
            if(a.play < b.play) {
                return 1;
            } else if(a.play > b.play) {
                return -1;
            } else {
                if(a.index > b.index) {
                    return 1;
                } else if(a.index < b.index) {
                    return -1;
                } else {
                    return 0;
                }
            }
        }
    })
    let count = 0;
    const keys = Object.keys(categoryTime);
    const keyCounts = {};
    for(const element of keys) {
        if(keyCounts[element] === undefined) {
            keyCounts[element] = 0;
        }
    }

    let elementCount = 0;
    const filteredCases = cases.filter((element) => {
        if(keyCounts[element.genre] >= maxAlbumCount) {
            return null;
        } else {
            keyCounts[element.genre] += 1;
            return element;
        }
    })

    return filteredCases.map((element) => element.index);
}