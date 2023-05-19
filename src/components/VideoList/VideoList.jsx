import {VideosList, VideoListItem} from './VideoList.styled';

const VideoList = ({ videos, onSelect}) => {
    return(
        <VideosList>
            {videos.map(video => (
                    <VideoListItem key={video.id} onClick={()=> onSelect(video.link)}>
                        {video.link}
                    </VideoListItem>
                ))}
        </VideosList>
    );
};
export default VideoList;