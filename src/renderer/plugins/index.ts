/*
 * Vesktop, a desktop app aiming to give you a snappier Discord Experience
 * Copyright (c) 2025 Vendicated and Vesktop contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { addPatch } from "../patches/shared";
import UnlimitedAccounts from "./UnlimitedAccounts";

// Register UnlimitedAccounts plugin patches with Vencord
if (UnlimitedAccounts.patches) {
    addPatch({
        patches: UnlimitedAccounts.patches.map(p => ({
            ...p,
            plugin: UnlimitedAccounts.name
        }))
    });
}

// Also register the plugin itself for settings
if (Vencord?.Plugins) {
    Vencord.Plugins.plugins[UnlimitedAccounts.name] = UnlimitedAccounts;
    console.log(`[Equibop] Registered plugin: ${UnlimitedAccounts.name}`);
}
