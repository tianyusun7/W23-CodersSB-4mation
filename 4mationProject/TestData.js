// static data for testing the frontend
// will eventually be replaced by backend code


// the list of boards we see in HomeScreen
// type tells component list what component to render
// type table:
// 0 -> BoardListItem
// 1 -> PostListItem
// ...
export const boardListData = [ 
    { id: 0, type: 0, boardName: 'anime', boardOwnerName: 'sdf4' },
    { id: 1, type: 0, boardName: 'programming', boardOwnerName: 'asdasd' },
    { id: 2, type: 0, boardName: 'tv shows', boardOwnerName: 'abc' },
    { id: 3, type: 0, boardName: 'music', boardOwnerName: 'yhhhh6677' },
    { id: 4, type: 0, boardName: 'video games', boardOwnerName: 'uluyffhhf6' },
];

// props for BoardInfo Components, indexed by id from boardListData
export const boardInfoData = [
    { boardName: 'anime', boardOwnerName: 'sdf4', creationDate: '03/04/2023', numberOfMembers: 99, boardDescription: 'abcd' },
    { boardName: 'programming', boardOwnerName: 'asdasd', creationDate: '03/04/2023', numberOfMembers: 69, boardDescription: 'abcd' },
    { boardName: 'tv shows', boardOwnerName: 'abc', creationDate: '03/04/2023', numberOfMembers: 42, boardDescription: 'abcd' },
    { boardName: 'music', boardOwnerName: 'yhhhh6677', creationDate: '03/04/2023', numberOfMembers: 12, boardDescription: 'abcd' },
    { boardName: 'video games', boardOwnerName: 'uluyffhhf6', creationDate: '03/04/2023', numberOfMembers: 9852, boardDescription: 'abcd' },
]

