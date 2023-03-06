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

export const PostListData = [
    { id: 0, type: 1, postTitle: 'dog', postAuthor: 'anonymous', postTime: '03/05/2023-22:57', numUpvotes: 26, numDownvotes: 10, numComments: 5},
    { id: 1, type: 1, postTitle: 'cat', postAuthor: 'anonymous', postTime: '03/05/2023-22:32', numUpvotes: 20, numDownvotes: 5, numComments: 0},
    { id: 2, type: 1, postTitle: 'turtle', postAuthor: 'anonymous', postTime: '03/05/2023-20:02', numUpvotes: 1, numDownvotes: 0, numComments: 0},
    { id: 3, type: 1, postTitle: 'control', postAuthor: 'anonymous', postTime: '03/05/2023-19:57', numUpvotes: 12, numDownvotes: 3, numComments: 3},
    { id: 4, type: 1, postTitle: 'government', postAuthor: 'anonymous', postTime: '03/05/2023-19:50', numUpvotes: 1, numDownvotes: 96, numComments: 4},
    { id: 5, type: 1, postTitle: 'call of duty', postAuthor: 'anonymous', postTime: '03/05/2023-19:57', numUpvotes: 1, numDownvotes: 96, numComments: 125},
]

// props for BoardInfo Components, indexed by id from boardListData
export const boardInfoData = [
    { boardName: 'anime', boardOwnerName: 'sdf4', creationDate: '03/04/2023', numberOfMembers: 99, boardDescription: 'abcd' },
    { boardName: 'programming', boardOwnerName: 'asdasd', creationDate: '03/04/2023', numberOfMembers: 69, boardDescription: 'abcd' },
    { boardName: 'tv shows', boardOwnerName: 'abc', creationDate: '03/04/2023', numberOfMembers: 42, boardDescription: 'abcd' },
    { boardName: 'music', boardOwnerName: 'yhhhh6677', creationDate: '03/04/2023', numberOfMembers: 12, boardDescription: 'abcd' },
    { boardName: 'video games', boardOwnerName: 'uluyffhhf6', creationDate: '03/04/2023', numberOfMembers: 5, boardDescription: 'abcd' },
]

