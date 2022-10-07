import { Router } from 'express'
import { CreatePlaylistController, DeletePlaylistController, DownloadPlaylistController, GetPlaylistController, ListPlaylistsByNameController, ListPlaylistsByRelevanceController, UpdatePlaylistController } from '../controller/playlist.js'

class PlaylistRouter {
    constructor() {
        this.router = Router()
        
        this.router.post('/createPlaylist', new CreatePlaylistController().createPlaylist)
        this.router.get('/getPlaylist', new GetPlaylistController().getPlaylist)
        this.router.post('/updatePlaylist', new UpdatePlaylistController().updatePlaylist)
        this.router.delete('/deletePlaylist', new DeletePlaylistController().deletePlaylist)
        this.router.get('/listPlaylistsByName', new ListPlaylistsByNameController().listPlaylistsByName)
        this.router.get('/listPlaylistsByRelevance', new ListPlaylistsByRelevanceController().listPlaylistsByRelevance)
        this.router.post('/downloadPlaylist', new DownloadPlaylistController().downloadPlaylist)
    }

    getRouter() {
        return this.router
    }

}

export {
    PlaylistRouter
}