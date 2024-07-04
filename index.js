// code your solution here
function superbowlWin (record) {
    const winRecord = record.find(function(record) {
        return record.result === "W";
    });
    return winRecord ? winRecord.year : undefined;
}