<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use App\Models\Skill;
use App\Models\Achievement;
use App\Models\Project;
use Illuminate\Http\JsonResponse;

class PortfolioController extends Controller
{
    /**
     * Get all portfolio data for the frontend.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        // Fetch the main profile with its related stats and social links
        $profile = Profile::with(['stats', 'socialLinks'])->first();

        // Format the profile data to match the frontend expectations
        $formattedProfile = null;
        if ($profile) {
            $formattedProfile = [
                'name' => $profile->name,
                'lastName' => $profile->last_name,
                'title' => $profile->title,
                'subtitle' => $profile->subtitle,
                'role' => $profile->role,
                'subRole' => $profile->sub_role,
                'heroImage' => $profile->hero_image,
                'about' => [
                    'title' => $profile->about_title,
                    'description1' => $profile->about_description_1,
                    'description2' => $profile->about_description_2,
                    'stats' => $profile->stats->map(function ($stat) {
                        return ['value' => $stat->value, 'label' => $stat->label];
                    }),
                    'image1' => $profile->about_image_1,
                    'image2' => $profile->about_image_2,
                ],
                'contact' => [
                    'phone' => $profile->contact_phone,
                    'instagram' => $profile->contact_instagram,
                    'socials' => $profile->socialLinks->map(function ($link) {
                        return ['handle' => $link->handle, 'type' => $link->type];
                    }),
                ]
            ];
        }

        // Fetch skills with their bullet points
        $skills = Skill::with('bullets')->get()->map(function ($skill) {
            return [
                'id' => $skill->id,
                'title' => $skill->title,
                'icon' => $skill->icon,
                'description' => $skill->description,
                'bullets' => $skill->bullets->pluck('bullet_text')
            ];
        });

        // Fetch achievements ordered by sort_order
        $achievements = Achievement::orderBy('sort_order')->get()->map(function ($achievement) {
            return [
                'id' => $achievement->display_id,
                'title' => $achievement->title,
                'subtitle' => $achievement->subtitle
            ];
        });

        // Fetch projects ordered by sort_order
        $projects = Project::orderBy('sort_order')->get()->map(function ($project) {
            return [
                'id' => $project->id,
                'title' => $project->title,
                'category' => $project->category,
                'image' => $project->image,
                'span' => $project->grid_span
            ];
        });

        // Return the combined data structure
        return response()->json([
            'profile' => $formattedProfile,
            'skills' => $skills,
            'achievements' => $achievements,
            'projects' => $projects
        ]);
    }
}
