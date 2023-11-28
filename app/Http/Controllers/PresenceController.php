<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Staff;
use Inertia\Controller;
use Illuminate\Http\Request;

class PresenceController extends Controller
{
    public function index() {
        
        $job = User::with('position')->get();
        return Inertia::render('Presence/Presence', [
            'title' => 'Presence',
            'job' => $job
        ]);
    }
}
