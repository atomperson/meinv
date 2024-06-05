import { Chromeless } from 'chromeless'

console.log(Chromeless)

export default async () => {
    return {
        body: JSON.stringify({ code: 200, data: 'xx--xx--xx', msg: '成功' }),
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        status: 200
    }
}
