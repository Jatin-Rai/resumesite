import InfinityLoader from "../../assets/infinity_loader.gif"

const Loading = () => {
    return (
        <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
            <div className="p-4">
                <img src={InfinityLoader} alt="loader" />
            </div>
        </div>
    )
}

export default Loading