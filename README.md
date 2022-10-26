api:
    local:
    vercel:
        settings in vercel:
            Build & Development Settings
                Build Command           Override mit ''
                Output Directory        Override mit ''
                Install Command         Override mit ''
                Development Command     Override mit ''
            Root Directory
                api
                Include source files outside of the Root Directory in the Build Step: not set
            integration: die MongoDB
            Environment Variables:
                ENABLE_CORS:    true
                DB_URL:         mongodb+srv://issuetracker_user:2erllKuWsYj8e5Rr@cluster0.qxehy0z.mongodb.net/issue_tracker?retryWrites=true&w=majority
                                mongodb+srv://issuetracker_user:2erllKuWsYj8e5Rr@cluster0.qxehy0z.mongodb.net/?retryWrites=true&w=majority
            rest ist standart
        zugriff:
            curl --request POST   --header 'content-type: application/json'   --url 'https://10-13-deleting-an-issue.vercel.app/graphql'   --data '{"query":"query { about }"}'
            curl --request POST   --header 'content-type: application/json'   --url 'https://10-13-deleting-an-issue.vercel.app/graphql'   --data '{"query":"query { issueList                {_id, id, title, status, owner, effort, created, due, description} }"}' | jq
            curl --request POST   --header 'content-type: application/json'   --url 'https://10-13-deleting-an-issue.vercel.app/graphql'   --data '{"query":"query { issueList(status:Fixed)  {_id, id, title, status, owner, effort, created, due, description} }"}' | jq
            curl --request POST   --header 'content-type: application/json'   --url 'https://10-13-deleting-an-issue.vercel.app/graphql'   --data '{"query":"query { issue(id:10)             {_id, id, title, status, owner, effort, created, due, description} }"}' | jq
            curl --request POST   --header 'content-type: application/json'   --url 'https://10-13-deleting-an-issue.vercel.app/graphql'   --data '{"query":"mutation { setAboutMessage(message:\"NEW_ABOUT\") }"}'
        response: {"data":{"about":"Issue Tracker API v1.0"}}


