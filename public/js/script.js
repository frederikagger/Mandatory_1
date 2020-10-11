const redirectToNextPage = () => {
    const path = window.location.pathname;
    const weekNumber = Number(path.slice(-1))+1;
    const nextPagePath = path.slice(0,-1)+weekNumber;
    window.location.href = nextPagePath;
}

const redirectToPrevPage = () => {
    const path = window.location.pathname;
    const weekNumber = Number(path.slice(-1))-1;
    const nextPagePath = path.slice(0,-1)+weekNumber;
    window.location.href = nextPagePath;
}