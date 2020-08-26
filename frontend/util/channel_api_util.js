export const fetchChannels = (serverId) => (
    $.ajax({
        url: `/api/servers/${serverId}/channels`,
        method: "GET"
    })
);

export const fetchChannel = (serverId, channelId) => (
    $.ajax({
        url: `/api/servers/${serverId}/channels/${channelId}`,
        method: "GET"
    })
);

export const createChannel = (serverId, channel) => (
    $.ajax({
        url: `/api/servers/${serverId}/channels`,
        method: "POST",
        data: { channel }
    })
);

export const updateChannel = (serverId, channel) => (
    $.ajax({
        url: `/api/servers/${serverId}/channels/${channel.id}`,
        method: "PATCH",
        data: { channel }
    })
);

export const deleteChannel = (serverId, channelId) => (
    $.ajax({
        url: `/api/servers/${serverId}/channels/${ channelId }`,
        method: "DELETE"
    })
);
