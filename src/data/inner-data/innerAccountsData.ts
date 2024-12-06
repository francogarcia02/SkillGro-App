interface Publications {
    videoId: number;
    title: string;
}

interface Bought {
    videoId: number;
    title: string;
}

interface DataType {
    id: number;
    user: string;
    email: string;
    password: string;
    description: string;
    publications: Publications[];
    bought: Bought[];
}

const inner_account_data: DataType[] = [
   {
        id: 1,
        user: 'user1',
        email: 'francoalbertogarcia2017@gmail.com',
        password: 'Password1',
        description: 'blablablablablabla',
        publications: [
        {
            videoId: 1,
            title: 'a'
        },
        {
            videoId: 3,
            title: 'b'
        },
        {
            videoId: 7,
            title: 'b'
        },
        ],
        bought: [
        {
            videoId: 4,
            title: 'a'
        },
        {
            videoId: 5,
            title: 'b'
        },
        {
            videoId: 9,
            title: 'b'
        },
        ],
    },
    {
        id: 2,
        user: 'user2',
        email: 'user2@gmail.com',
        password: 'Password2',
        description: 'blablablablablabla',
        publications: [
        {
            videoId: 1,
            title: 'a'
        },
        {
            videoId: 3,
            title: 'b'
        },
        {
            videoId: 7,
            title: 'b'
        },
        {
            videoId: 1,
            title: 'a'
        },
        {
            videoId: 3,
            title: 'b'
        },
        {
            videoId: 7,
            title: 'b'
        },
        ],
        bought: [
        {
            videoId: 4,
            title: 'a'
        },
        {
            videoId: 5,
            title: 'b'
        },
        {
            videoId: 9,
            title: 'b'
        },
        {
            videoId: 4,
            title: 'a'
        },
        {
            videoId: 5,
            title: 'b'
        },
        {
            videoId: 9,
            title: 'b'
        },
        ],
    },
    {
        id: 1,
        user: 'user3',
        email: 'user3@gmail.com',
        password: 'Password3',
        description: 'blablablablablabla',
        publications: [
        {
            videoId: 2,
            title: 'a'
        },
        {
            videoId: 3,
            title: 'b'
        },
        {
            videoId: 7,
            title: 'b'
        },
        ],
        bought: [
        {
            videoId: 3,
            title: 'a'
        },
        {
            videoId: 5,
            title: 'b'
        },
        {
            videoId: 9,
            title: 'b'
        },
        ],
    },
]

export default inner_account_data;
