var arr = [
    {
        key: 1,
        value: 1,
        children: [
            {
                key: 2,
                value: 2,
            },
        ],
    },
    {
        key: 3,
        value: 3,
        children: [
            {
                key: 4,
                value: 4,
                children: [
                    {
                        key: 10,
                        value: 10
                    }
                ]
            },
        ],
    },
    {
        key: 5,
        value: 5,
        children: [
            {
                key: 6,
                value: 6,
            },
        ],
    },
]

function query(arr, data) {
    arr?.forEach(item => {
        console.log(item)
        if(item.value == data) {
            console.log(item)
        } else {
            query(item.children, data)
        }
    })
}

query(arr, 10)