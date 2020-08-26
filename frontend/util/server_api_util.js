export const fetchServers = () => (
    $.ajax({
        url: `/api/servers`,
        method: "GET"
    })
);

export const fetchServer = serverId => (
    $.ajax({
        url: `/api/servers/${serverId}`,
        method: "GET"
    })
);

export const createServer = server => (
    $.ajax({
        url: `/api/servers/`,
        method: "POST",
        data: {server}
    })
);

export const updateServer = server => (
    $.ajax({
        url: `/api/servers/${server.id}`,
        method: "PATCH",
        data: {server}
    })
);

export const deleteServer = serverId => (
    $.ajax({
        url: `/api/servers/${serverId}`,
        method: "DELETE"
    })
);

export const joinServer = inviteCode => (
    $.ajax({
        url: `/api/servers/join/${inviteCode}`,
        method: "POST"
    })
)

export const leaveServer = serverId => (
    $.ajax({
        url: `/api/servers/leave/${serverId}`,
        method: "DELETE"
    })
)