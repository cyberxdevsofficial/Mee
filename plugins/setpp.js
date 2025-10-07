cmd({
    pattern: "setpp",
    desc: "Set bot profile picture.",
    category: "owner",
    react: "🖼️",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
    if (!isOwner) return reply("❌ You is not the owner");
    if (!quoted || !quoted.message.imageMessage) return reply("❌ please reply to image.");

    try {
        const media = await conn.downloadMediaMessage(quoted);
        await conn.updateProfilePicture(conn.user.jid, { url: media });
        reply("🖼️ ρяσƒιℓє ρι¢тυяє υρ∂αтє∂ ѕυ¢¢єѕѕƒυℓℓу!");
    } catch (error) {
        reply(`❌ єяяσя υρ∂αтιηg ρяσƒιℓє ρι¢тυяє: ${error.message}`);
    }
});