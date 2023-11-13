const defaultContent = `Bob was convinced his cat had a job. Every morning, Mr. Whiskers would leave the house at 8 a.m., only to return at 5 p.m. with a mysterious air about him. Bob even once found a tiny briefcase filled with small mouse currency and a business card that read, "Mr. Whiskers, CEO of CatCorp." The corporate world was a jungle, but it seemed even the urban kitties had found their way in!`

export default function PageContent({children}) {
    return<main className="bg-hray-100 rounded-md p-6">{children}</main>
}