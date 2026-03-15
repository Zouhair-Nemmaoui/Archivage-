<?php

namespace App\Http\Controllers;


use App\Models\Chart;
use App\Models\Programme;
use Illuminate\Http\Request;

class ChartController extends Controller
{
    public function index()
    {
        // Get the total count of programmes for each category
        $totalCounts = Programme::selectRaw('category, COUNT(*) as total_count')
                                ->groupBy('category')
                                ->get();

        // Calculate the total sum of all categories
        $totalSum = $totalCounts->sum('total_count');

        // Prepare the data with percentages
        $data = $totalCounts->map(function ($item) use ($totalSum) {
            $percentage = round(($item->total_count / $totalSum) * 100, 2);

            // Update or create entry in the chrt table
            Chart::updateOrCreate(
                ['category' => $item->category],
                ['total_count' => $item->total_count]
            );

            return [
                'category' => $item->category,
                'percentage' => $percentage
            ];
        });

        return response()->json($data);
    }
}